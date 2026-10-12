import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Referee from '../chess/components/Referee/Referee';
import './ChessModal.css';

type ChessModalProps = {
  open: boolean;
  onClose: () => void;
};

const ChessModal = ({ open, onClose }: ChessModalProps) => {
  const [expanded, setExpanded] = useState(false);

  const closeAndReset = () => {
    setExpanded(false);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={closeAndReset}
      aria-labelledby="chess-modal-title"
      aria-describedby="chess-modal-content"
    >
      <Box className={`chess-window${expanded ? ' chess-window--expanded' : ''}`}>
        <div className="chess-titlebar">
          <div className="chess-window-controls" aria-label="Window controls">
            <button className="chess-control chess-control--close" type="button" aria-label="Close window" onClick={closeAndReset} />
            <button className="chess-control chess-control--minimize" type="button" aria-label="Minimize window" onClick={closeAndReset} />
            <button
              className="chess-control chess-control--expand"
              type="button"
              aria-label={expanded ? 'Restore window' : 'Expand window'}
              aria-pressed={expanded}
              onClick={() => setExpanded((value) => !value)}
            />
          </div>
          <h2 id="chess-modal-title">Chess</h2>
          <div className="chess-titlebar-spacer" />
        </div>

        <div className="chess-app" id="chess-modal-content">
          {open ? <Referee /> : null}
        </div>
      </Box>
    </Modal>
  );
};

export default ChessModal;
