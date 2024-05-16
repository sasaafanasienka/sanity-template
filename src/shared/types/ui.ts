export enum SIZE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export type Size = SIZE

export enum VARIANT {
  BASE = 'base',
  DARK = 'dark',
  LIGHT = 'light',
  WHITE = 'white',
  OUTLINE = 'outline',
  TRANSPARENT = 'transparent'
}

export type Variant = VARIANT

export type ButtonVariant = Omit<Variant, 'transparent'>