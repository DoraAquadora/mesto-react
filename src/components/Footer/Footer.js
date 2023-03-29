function Footer() {
  const year = new Date()
  return (
    <footer className="footer">
      <p className="footer__text">&copy; {year.getFullYear()}2023 Mesto Russia</p>
    </footer>
  )
}

export default Footer
