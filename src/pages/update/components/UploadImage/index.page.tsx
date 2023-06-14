import { useState } from 'react'
import {
  Button,
  ImageContainer,
  Title,
  UploadImagesContainer,
  UploadImagesInput,
  UploadImagesLabel,
  UploadImagesInputContainer,
  ImagePreview,
} from './styles'
import { api } from '@component/lib/axios'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const uploadFormSchema = z.object({
  title: z.string().nonempty(),
  url: z.string().nonempty(),
})

type UploadFormData = z.infer<typeof uploadFormSchema>

export default function UploadImage() {
  const [uploaded, setUploaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<UploadFormData>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      title: '',
      url: '',
    },
  })

  async function handleUpload(data: UploadFormData) {
    setUploaded(false)

    const { title, url } = data
    try {
      if (!selectedFile) return

      const formData = new FormData()
      formData.append('myImage', selectedFile)
      formData.append('title', title)
      formData.append('url', url)

      await api.post('/ejs/ejs', formData)

      setUploaded(true)
      setSelectedImage('')
      setSelectedFile(undefined)
      reset()
    } catch (error: any) {
      console.log(error.response?.data)
    }
  }

  return (
    <UploadImagesContainer onSubmit={handleSubmit(handleUpload)}>
      <Title>Upload Images</Title>
      <UploadImagesLabel>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0]
              setSelectedImage(URL.createObjectURL(file))
              setSelectedFile(file)
            }
          }}
        />
        <ImageContainer>
          {selectedImage ? (
            <ImagePreview src={selectedImage} alt="" fill />
          ) : (
            <span>Select Image</span>
          )}
        </ImageContainer>
      </UploadImagesLabel>
      <UploadImagesInputContainer>
        <UploadImagesInput
          placeholder="Nome da Empresa Júnior"
          required
          {...register('title')}
        />
        <UploadImagesInput
          placeholder="Url do site ou rede social"
          required
          {...register('url')}
        />
      </UploadImagesInputContainer>
      <Button
        type="submit"
        disabled={isSubmitting}
        style={{ opacity: isSubmitting ? '.5' : '1' }}
      >
        {isSubmitting ? 'Uploading..' : 'Upload'}
      </Button>
      {uploaded && <span>Uploaded</span>}
    </UploadImagesContainer>
  )
}
