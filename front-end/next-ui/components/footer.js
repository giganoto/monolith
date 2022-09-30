import Image from 'next/image'

export const Footer = props => {
  return (
    <footer className="yellow">
      <h4>
          <a href="https://github.com/giganoto-com/monolith" target="_blank" rel="noreferrer">
            We ❤️  Open Source | Contribute to this source code - 
            <Image src="/octocat.png" width="18" height="18" alt="Github logo" />
          </a>
      </h4>
    </footer>
  )
}
