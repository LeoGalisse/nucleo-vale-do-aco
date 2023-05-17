import { EjsContainer, EjsContent, EjsItem, EjsTitle } from './styles'
import agricampoLogo from '../../assets/logo-ejs/logo-agricampo.jpg'
import ascenderLogo from '../../assets/logo-ejs/logo-ascender.jpg'
import atlasLogo from '../../assets/logo-ejs/logo-atlas.png'
import boltLogo from '../../assets/logo-ejs/logo-bolt.svg'
import brickLogo from '../../assets/logo-ejs/logo-brick.png'
import continuumLogo from '../../assets/logo-ejs/logo-continuum.png'
import destaqueLogo from '../../assets/logo-ejs/logo-destaque.jpeg'
import dharmaLogo from '../../assets/logo-ejs/logo-dharma.jpeg'
import excelsiorLogo from '../../assets/logo-ejs/logo-excelsior.png'
import inovaLogo from '../../assets/logo-ejs/logo-inova.jpg'
import metalminasLogo from '../../assets/logo-ejs/logo-metalminas.png'
import onebitLogo from '../../assets/logo-ejs/logo-onebit.png'
import seniorLogo from '../../assets/logo-ejs/logo-senior.png'
import tetraLogo from '../../assets/logo-ejs/logo-tetra.png'
import upconsultoriaLogo from '../../assets/logo-ejs/logo-upconsultoria.png'
import visaoLogo from '../../assets/logo-ejs/logo-visao.png'
import Image from 'next/image'

export default function Ejs() {
  return (
    <EjsContainer>
      <EjsTitle>Nossas Empresas Juniores</EjsTitle>
      <EjsContent>
        <EjsItem>
          <Image
            src={agricampoLogo}
            alt="Logo da Agricampo"
            width={200}
            quality={50}
          />
          <div>
            <a
              href="https://agricampoej.wixsite.com/agricampoej-1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Agricampo</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={ascenderLogo}
            alt="Logo da Ascender"
            width={200}
            quality={70}
          />
          <div>
            <a
              href="https://www.instagram.com/ascender.jr/?hl=pt"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Ascender Jr</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image src={atlasLogo} alt="Logo da Atlas" width={200} quality={40} />
          <div>
            <a
              href="https://www.atlasjr.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Atlas Soluções em Tecnologia</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image src={boltLogo} alt="Logo da Bolt" width={200} quality={10} />
          <div>
            <a
              href="https://www.boltconsultoriajr.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Bolt Jr - Soluções em Eng. Mecânica</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image src={brickLogo} alt="Logo da Brick" width={200} quality={10} />
          <div>
            <a
              href="https://www.instagram.com/brick_ej/?hl=pt"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Brick Júnior</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={continuumLogo}
            alt="Logo da Continuum"
            width={150}
            quality={50}
          />
          <div>
            <a
              href="https://continuumjr.wixsite.com/continuumjr"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Continuum Júnior</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={destaqueLogo}
            alt="Logo da Destaque"
            width={200}
            quality={50}
          />
          <div>
            <a
              href="https://www.instagram.com/destaquejr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Destaque Jr. Soluções Empresáriais</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={dharmaLogo}
            alt="Logo da Dharma"
            width={200}
            quality={10}
          />
          <div>
            <a
              href="https://www.dharmajr.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Dharma Jr Consultoria</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={excelsiorLogo}
            alt="Logo da Excelsior"
            width={200}
            quality={50}
          />
          <div>
            <a
              href="https://www.instagram.com/excelsior.jr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Excelsior Jr</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image src={inovaLogo} alt="Logo da Inova" width={200} quality={10} />
          <div>
            <a
              href="http://www.inovajr.ufop.br/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Inova Consultoria Jr</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={metalminasLogo}
            alt="Logo da Metalminas"
            width={150}
            quality={10}
          />
          <div>
            <a
              href="https://www.instagram.com/metalminas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Metalminas</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={onebitLogo}
            alt="Logo da Onebit"
            width={200}
            quality={10}
          />
          <div>
            <a
              href="https://www.instagram.com/onebitjr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>OneBit</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={seniorLogo}
            alt="Logo da Senior"
            width={200}
            quality={50}
          />
          <div>
            <a
              href="https://www.instagram.com/seniorconsultoriajr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Sênior Consultoria Ambiental</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image src={tetraLogo} alt="Logo da Tetra" width={200} quality={80} />
          <div>
            <a href="https://www.tetrajr.com/" target="_blank" rel="noreferrer">
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Tetra Jr</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image
            src={upconsultoriaLogo}
            alt="Logo da UpConsultoria"
            width={200}
            quality={100}
          />
          <div>
            <a
              href="http://upconsultoriajr.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>UPConsultoria Jr.</span>
          </div>
        </EjsItem>
        <EjsItem>
          <Image src={visaoLogo} alt="Logo da Visao" width={200} quality={10} />
          <div>
            <a href="https://visaojr.com.br/" target="_blank" rel="noreferrer">
              <i className="ri-search-line ri-2x"></i>
            </a>
            <span>Visão Tecnologia e Sistemas</span>
          </div>
        </EjsItem>
      </EjsContent>
    </EjsContainer>
  )
}
