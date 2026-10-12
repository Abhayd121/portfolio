import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './FinderModal.css';

type FinderModalProps = {
  open: boolean;
  folderName: string;
  onClose: () => void;
};

const previewNames = [
  'Screenshot 2026-10-12 10.49 PM',
  'Screenshot 2026-10-11 02.57 PM',
  'Screenshot 2026-10-10 10.31 PM',
  'Screenshot 2026-10-08 04.35 PM',
  'Screenshot 2026-10-07 07.51 PM',
  'Screenshot 2026-10-06 08.40 PM',
];

const FinderModal = ({ open, folderName, onClose }: FinderModalProps) => {
  const [expanded, setExpanded] = useState(false);

  const closeAndReset = () => {
    setExpanded(false);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={closeAndReset}
      aria-labelledby="finder-modal-title"
      aria-describedby="finder-modal-content"
    >
      <Box className={`finder-window${expanded ? ' finder-window--expanded' : ''}`}>
        <div className="finder-titlebar">
          <div className="finder-window-controls" aria-label="Window controls">
            <button className="finder-control finder-control--close" type="button" aria-label="Close window" onClick={closeAndReset} />
            <button className="finder-control finder-control--minimize" type="button" aria-label="Minimize window" onClick={closeAndReset} />
            <button
              className="finder-control finder-control--expand"
              type="button"
              aria-label={expanded ? 'Restore window' : 'Expand window'}
              aria-pressed={expanded}
              onClick={() => setExpanded((value) => !value)}
            />
          </div>
          <h2 id="finder-modal-title">{folderName}</h2>
          <div className="finder-titlebar-spacer" />
        </div>

        <div className="finder-toolbar">
          <div className="finder-navigation-buttons">
            <button type="button" aria-label="Back" title="Back">‹</button>
            <button type="button" aria-label="Forward" title="Forward">›</button>
          </div>
          <div className="finder-view-buttons" aria-label="View options">
            <button type="button" className="is-selected" aria-label="Icon view" title="Icon view">▦</button>
            <button type="button" aria-label="List view" title="List view">☷</button>
            <button type="button" aria-label="Column view" title="Column view">▥</button>
            <button type="button" aria-label="Gallery view" title="Gallery view">▤</button>
          </div>
          <button className="finder-toolbar-menu" type="button" aria-label="More options" title="More options">☷⌄</button>
          <div className="finder-toolbar-actions">
            <button type="button" aria-label="Share" title="Share">↥</button>
            <button type="button" aria-label="Tags" title="Tags">◇</button>
            <button type="button" aria-label="More actions" title="More actions">•••</button>
          </div>
          <button className="finder-search" type="button" aria-label="Search" title="Search">⌕</button>
        </div>

        <div className="finder-content" id="finder-modal-content">
          <aside className="finder-sidebar" aria-label="Finder sidebar">
            <button type="button"><span>◷</span>Recents</button>
            <button type="button"><span>▱</span>Shared</button>
            <h3>Favorites</h3>
            <button type="button"><span>✣</span>Applications</button>
            <button type="button" className="finder-sidebar-selected"><span>▱</span>{folderName}</button>
            <button type="button"><span>▯</span>Documents</button>
            <button type="button"><span>↓</span>Downloads</button>
            <button type="button"><span>⚒</span>Developer</button>
            <h3>Locations</h3>
            <button type="button"><span>☁</span>iCloud Drive</button>
            <button type="button"><span>⌂</span>me</button>
            <button type="button"><span>▤</span>Macintosh HD</button>
            <button type="button"><span>◉</span>AirDrop</button>
            <button type="button"><span>♜</span>Trash</button>
            <h3>Tags</h3>
            <button type="button"><span className="finder-tag-dot finder-tag-dot--red" />Red</button>
            <button type="button"><span className="finder-tag-dot finder-tag-dot--orange" />Orange</button>
            <button type="button"><span className="finder-tag-dot finder-tag-dot--yellow" />Yellow</button>
          </aside>

          <section className="finder-file-area" aria-label={`${folderName} contents`}>
            <div className="finder-preview-grid">
              {previewNames.map((name, index) => (
                <div className="finder-preview-item" key={name}>
                  <div className={`finder-preview finder-preview--${index + 1}`} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div className="finder-item-grid">
              <div className="finder-item-card">
                <div className="finder-folder-icon" aria-hidden="true" />
                <span>{folderName}</span>
              </div>
              <div className="finder-item-card">
                <div className="finder-archive-icon" aria-hidden="true"><span>ZIP</span></div>
                <span>{folderName.toLowerCase().replaceAll(' ', '_')}_files.zip</span>
              </div>
              <div className="finder-item-card">
                <div className="finder-document-icon" aria-hidden="true"><span /><span /><span /><span /></div>
                <span>Notes.txt</span>
              </div>
              <div className="finder-item-card">
                <div className="finder-folder-icon" aria-hidden="true" />
                <span>Projects</span>
              </div>
            </div>
          </section>
        </div>
      </Box>
    </Modal>
  );
};

export default FinderModal;