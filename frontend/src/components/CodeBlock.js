import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContentCopy } from '@mui/icons-material';

const CodeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#0d1117',
  borderRadius: '12px',
  padding: '1rem',
  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  overflow: 'auto',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const CopyButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'rgba(255, 255, 255, 0.7)',
  padding: '0.5rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
  },
}));

const CodeBlock = ({ children, language = 'javascript', showCopy = true, ...props }) => {
  const handleCopy = () => {
    const codeText = typeof children === 'string' ? children : children.toString();
    navigator.clipboard.writeText(codeText);
  };

  // Simple syntax highlighting using React elements instead of dangerouslySetInnerHTML
  const renderCodeWithHighlighting = (code) => {
    if (typeof code !== 'string') return code;
    
    const lines = code.split('\n');
    
    return lines.map((line, lineIndex) => {
      const tokens = [];
      let currentIndex = 0;
      let workingLine = line;
      
      // Define patterns to highlight
      const patterns = language === 'yaml' 
        ? [
            // YAML keys
            { pattern: /^(\s*)([\w-]+)(\s*:)/, color: '#79c0ff', weight: 600, groups: [1, 2, 3] },
            // YAML values (strings)
            { pattern: /:\s*"([^"]*)"/, color: '#a5d6ff', weight: 400 },
            { pattern: /:\s*'([^']*)'/, color: '#a5d6ff', weight: 400 },
            // YAML values (without quotes)
            { pattern: /:\s*([^\s#][^#]*)(?:#|$)/, color: '#e6edf3', weight: 400 },
            // YAML numbers and booleans
            { pattern: /:\s*(true|false|\d+)(?:\s|$)/, color: '#79c0ff', weight: 400 },
            // YAML comments
            { pattern: /(#.*)$/, color: '#8b949e', weight: 400, italic: true },
          ]
        : [
            // Node-Boot decorators
            { pattern: /@(NodeBootApplication|EnableAutoConfiguration|Autowired|RestController|PostMapping|GetMapping|RequestBody|PreAuthorize|RateLimit|Injectable|InjectRepository|Repository|Service|Component|Controller|PathVariable|RequestParam|Valid|Transactional|EnableDI|EnableOpenApi|EnableSwaggerUI|EnableActuator|EnableRepositories)\b/, color: '#07E770', weight: 600 },
            // Keywords
            { pattern: /\b(import|export|from|class|function|const|let|var|async|await|return|if|else|for|while|try|catch|new|this|super|extends|implements|interface|type)\b/, color: '#07E770', weight: 500 },
            // Strings
            { pattern: /(['"`])((?:(?!\1)[^\\]|\\.)*)(\1)/, color: '#a5d6ff', weight: 400 },
            // Comments
            { pattern: /(\/\/.*$)/, color: '#8b949e', weight: 400, italic: true },
            // Numbers
            { pattern: /\b(\d+\.?\d*)\b/, color: '#79c0ff', weight: 400 },
          ];
      
      let processedLine = line;
      const highlights = [];
      
      // Find all matches
      patterns.forEach(({ pattern, color, weight, italic }) => {
        let match;
        const regex = new RegExp(pattern, 'g');
        while ((match = regex.exec(line)) !== null) {
          highlights.push({
            start: match.index,
            end: match.index + match[0].length,
            color,
            weight,
            italic,
            text: match[0]
          });
        }
      });
      
      // Sort highlights by start position
      highlights.sort((a, b) => a.start - b.start);
      
      // Remove overlapping highlights (keep the first one)
      const cleanHighlights = [];
      let lastEnd = 0;
      highlights.forEach(highlight => {
        if (highlight.start >= lastEnd) {
          cleanHighlights.push(highlight);
          lastEnd = highlight.end;
        }
      });
      
      // Build the line with highlights
      const lineElements = [];
      let currentPos = 0;
      
      cleanHighlights.forEach((highlight, i) => {
        // Add text before highlight
        if (highlight.start > currentPos) {
          lineElements.push(line.slice(currentPos, highlight.start));
        }
        
        // Add highlighted text
        lineElements.push(
          <span
            key={`${lineIndex}-${i}`}
            style={{
              color: highlight.color,
              fontWeight: highlight.weight,
              fontStyle: highlight.italic ? 'italic' : 'normal'
            }}
          >
            {highlight.text}
          </span>
        );
        
        currentPos = highlight.end;
      });
      
      // Add remaining text
      if (currentPos < line.length) {
        lineElements.push(line.slice(currentPos));
      }
      
      return (
        <div key={lineIndex}>
          {lineElements.length > 0 ? lineElements : line}
        </div>
      );
    });
  };

  const codeContent = typeof children === 'string' ? children : children.toString();

  return (
    <CodeContainer {...props}>
      {showCopy && (
        <Tooltip title="Copy code">
          <CopyButton onClick={handleCopy} size="small">
            <ContentCopy fontSize="small" />
          </CopyButton>
        </Tooltip>
      )}
      <Box
        component="pre"
        sx={{
          margin: 0,
          padding: 0,
          color: '#e6edf3',
          textAlign: 'left',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        }}
      >
        {renderCodeWithHighlighting(codeContent)}
      </Box>
    </CodeContainer>
  );
};

export default CodeBlock;