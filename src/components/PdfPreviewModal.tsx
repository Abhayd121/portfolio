import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './PdfPreviewModal.css';

type PdfPreviewModalProps = {
  open: boolean;
  fileName: string;
  src: string;
  onClose: () => void;
};

const PdfPreviewModal = ({ open, fileName, src, onClose }: PdfPreviewModalProps) => {
  const [expanded, setExpanded] = useState(false);

  const closeAndReset = () => {
    setExpanded(false);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={closeAndReset}
      aria-labelledby="pdf-preview-title"
      aria-describedby="pdf-preview-content"
    >
      <Box className={`pdf-preview-window${expanded ? ' pdf-preview-window--expanded' : ''}`}>
        <div className="pdf-preview-titlebar">
          <div className="pdf-preview-window-controls" aria-label="Window controls">
            <button
              className="pdf-preview-control pdf-preview-control--close"
              type="button"
              aria-label="Close window"
              onClick={closeAndReset}
            />
            <button
              className="pdf-preview-control pdf-preview-control--minimize"
              type="button"
              aria-label="Minimize window"
              onClick={closeAndReset}
            />
            <button
              className="pdf-preview-control pdf-preview-control--expand"
              type="button"
              aria-label={expanded ? 'Restore window' : 'Expand window'}
              aria-pressed={expanded}
              onClick={() => setExpanded((value) => !value)}
            />
          </div>
          <h2 id="pdf-preview-title">{fileName}</h2>
          <div className="pdf-preview-titlebar-spacer" />
        </div>

        <div className="pdf-preview-content" id="pdf-preview-content">
          {open ? (
            <iframe
              className="pdf-preview-frame"
              src={src}
              title={fileName}
            />
          ) : null}
        </div>
      </Box>
    </Modal>
  );
};

export default PdfPreviewModal;
