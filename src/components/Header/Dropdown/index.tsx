import React, { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import Image from 'next/image'
import {
  DropdownMenuContent,
  DropdownMenuImage,
  DropdownMenuItem,
  DropdownMenuSeparator,
  IconButton,
} from './styles'
import { useRouter } from 'next/router'

export const DropdownMenuDemo = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root
      onOpenChange={() => {
        setOpen(!open)
      }}
    >
      <DropdownMenu.Trigger asChild>
        <IconButton aria-label="Customise options">
          {open ? (
            <i className="ri-close-line ri-xl" />
          ) : (
            <i className="ri-menu-line ri-xl" />
          )}
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5} side="left">
          <DropdownMenuItem
            onSelect={() => {
              router.push('/')
            }}
          >
            HOME
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              router.push('/quemsomos')
            }}
          >
            QUEM SOMOS
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              router.push('/ejs')
            }}
          >
            EMPRESAS JUNIORES
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              router.push('/faleconosco')
            }}
          >
            FALE CONOSCO
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuImage>
            <Image
              src="/images/logo.svg"
              alt="Logo do Núcleo do Vale do Aço"
              width={24}
              height={50}
            />
          </DropdownMenuImage>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
