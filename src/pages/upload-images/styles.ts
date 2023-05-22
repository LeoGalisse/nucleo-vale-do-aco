import { styled } from '@component/styles'
import Image from 'next/image'

export const UploadImagesContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: 73,
  padding: 40,
  gap: 20,
})

export const Title = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const UploadImagesLabel = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: 10,
})

export const ImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  padding: 10,
  width: 200,
  height: 200,

  border: '2px dashed $brown950',
  cursor: 'pointer',
})

export const ImagePreview = styled(Image, {
  objectFit: 'scale-down',
})

export const UploadImagesInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gap: 10,
})

export const UploadImagesInput = styled('input', {
  all: 'unset',
  padding: '10px 20px',
  backgroundColor: '$white',
  border: '2px solid $brown500',
  borderRadius: 8,
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',

  '&:focus': {
    border: '2px solid $brown700',
  },
})

export const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$brown500',
  borderRadius: 6,
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 120,
  maxWidth: 126,
  boxSizing: 'border-box',

  padding: '12px 20px',
  color: '$white',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  cursor: 'pointer',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$brown100',
  },
})
