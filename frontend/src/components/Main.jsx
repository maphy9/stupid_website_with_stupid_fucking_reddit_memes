import { useState } from "react"

export const Main = () => {
	const [meme, setMeme] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleMemeRequest = async () => {
		setLoading(true);
		fetch('/get_meme')
			.then(res => res.json())
			.then(data => {
				setMeme(() => ({image: data.image, source: data.source}));
				setLoading(false);
			})
	}

	return (
		<div className="main">
			<div className="resultBox">
			{meme ? (
					<>
					<img className="memeImage" alt="" src={ meme.image }/>
					<div className="memeSource"><a href={ meme.source }>Source</a></div>
					</>
				) : <></>
			}
			</div>
			<div className="btnHandler">
				<button className="getMemeBtn" onClick={ loading ? () => null : handleMemeRequest }>
					{loading ? "Loading..." :  `Get ${meme ? "another" : ""} meme`}
				</button>
			</div>
		</div>
	)
}
