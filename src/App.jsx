
import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Code-Generator</h1>
			<input 
				type="text"
				placeholder="https://3kportfolio.netlify.app"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}

      <div>
        <h1>QR Code Technoloy</h1>
        <p>Do you know about the world’s greatest technology of the 21st century? If your answer is “NO,” then don’t worry. Follow this article, what is a QR code, and acknowledge yourself with the most powerful technology.</p>
        <button><a href='https://digitash.com/technology/how-does-qr-code-technology-work/'  className='btnkm'>Know-More</a></button>
      </div>
		</div>
	)
}

export default App