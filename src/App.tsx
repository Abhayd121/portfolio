import { useState } from 'react'

import Navigationtopbar, { Navigationbottombar } from './components/Navigation'
import FinderModal from './components/FinderModal'
import ChessModal from './components/ChessModal'
import PdfPreviewModal from './components/PdfPreviewModal'
import WeatherWidget from './components/WeatherWidget'
import './App.css'

const RESUME_PDF_SRC = `${import.meta.env.BASE_URL}Abhayveer_Dhiman_Resume.pdf`

const desktopItems = [
  { name: 'Resume.pdf', type: 'pdf', color: '#5aa0d1', accent: '#5aa0d1' },
  { name: 'Projects', type: 'folder', color: '#5aa0d1', accent: '#5aa0d1' },
  // { name: 'dhim1050_103.zip', type: 'folder', color: '#5aa0d1', accent: '#5aa0d1' },
  // { name: 'jobs', type: 'file', color: '#5aa0d1', accent: '#5aa0d1' },
  // { name: 'dhim1050_a01.zip', type: 'folder', color: '#5aa0d1', accent: '#5aa0d1' },
  // { name: 'dhim1050_104.zip', type: 'folder', color: '#5aa0d1', accent: '#5aa0d1' },
  // { name: 'dhim1050_102.zip', type: 'folder', color: '#5aa0d1', accent: '#5aa0d1' },
  // { name: 'dhim1050_a02.zip', type: 'folder', color: '#5aa0d1', accent: '#5aa0d1' },
]

function App() {
  const [openFolder, setOpenFolder] = useState<string | null>(null)
  const [pdfOpen, setPdfOpen] = useState(false)
  const [chessOpen, setChessOpen] = useState(false)

  const openDesktopItem = (item: (typeof desktopItems)[number]) => {
    if (item.type === 'folder') setOpenFolder(item.name)
    if (item.type === 'pdf') setPdfOpen(true)
  }

  return (
    <div className="portfolio-app">
      <Navigationtopbar />
      <WeatherWidget />

      <div className="desktop-items" aria-label="Desktop files">
        {desktopItems.map((item) => (
          <div
            key={item.name}
            className={`desktop-item desktop-item--${item.type}`}
            onDoubleClick={() => openDesktopItem(item)}
            onKeyDown={(event) => {
              if ((item.type === 'folder' || item.type === 'pdf') && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                openDesktopItem(item)
              }
            }}
            role={item.type === 'folder' || item.type === 'pdf' ? 'button' : undefined}
            tabIndex={item.type === 'folder' || item.type === 'pdf' ? 0 : undefined}
            aria-label={
              item.type === 'folder'
                ? `Open ${item.name} folder`
                : item.type === 'pdf'
                  ? `Open ${item.name}`
                  : undefined
            }
          >
            <div className="desktop-icon">
              {item.type === 'folder' ? (
                <svg viewBox="0 0 90 80" className="folder-svg" aria-hidden="true">
                  <path d="M86.351 17.027H35.525c-1.909 0-3.706-.903-4.846-2.435l-2.457-3.302c-.812-1.092-2.093-1.735-3.454-1.735H3.649C1.634 9.556 0 11.19 0 13.205V29.11c0-2.015 1.634-1.649 3.649-1.649h82.703c2.015 0 3.649-.366 3.649 1.649v-8.435c0-2.015-1.634-3.649-3.649-3.649z" fill="rgb(48,168,249)"/>
                  <path d="M86.351 80.444H3.649C1.634 80.444 0 78.81 0 76.795V29.11c0-2.015 1.634-3.649 3.649-3.649h82.703c2.015 0 3.649 1.634 3.649 3.649v47.685c0 2.015-1.634 3.649-3.649 3.649z" fill="rgb(42,152,234)"/>
                </svg>
              ) : item.type === 'pdf' ? (
                <svg viewBox="0 0 64 80" className="pdf-svg" aria-hidden="true">
                  <path d="M8 4h36l12 12v56a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="#f5f5f7"/>
                  <path d="M44 4v10a2 2 0 0 0 2 2h10L44 4z" fill="#d8d8dc"/>
                  <rect x="10" y="36" width="44" height="22" rx="3" fill="#e74c3c"/>
                  <text x="32" y="52" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">PDF</text>
                </svg>
              ) : (
                <span className="desktop-file-body" />
              )}
            </div>
            <span className="desktop-label">{item.name}</span>
          </div>
        ))}
      </div>

      <FinderModal
        open={openFolder !== null}
        folderName={openFolder ?? ''}
        onClose={() => setOpenFolder(null)}
      />

      <PdfPreviewModal
        open={pdfOpen}
        fileName="Resume.pdf"
        src={RESUME_PDF_SRC}
        onClose={() => setPdfOpen(false)}
      />

      <ChessModal open={chessOpen} onClose={() => setChessOpen(false)} />

      <Navigationbottombar onAppClick={(name) => name === 'Chess' && setChessOpen(true)} />
    </div>
  )
}

export default App
