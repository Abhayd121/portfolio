export const PieceType = {
    PAWN: 'pawn',
    BISHOP: 'bishop',
    KNIGHT: 'knight',
    ROOK: 'rook',
    QUEEN: 'queen',
    KING: 'king',
} as const;

export type PieceType = typeof PieceType[keyof typeof PieceType];

export const TeamType = {
    OPPONENT: 'b',
    OUR: 'w',
} as const;

export type TeamType = typeof TeamType[keyof typeof TeamType];