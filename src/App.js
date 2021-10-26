import { useEffect } from 'react'
import './App.css'

const imgList = [
  {
    imgClassName: 'img1',
  },
  {
    imgClassName: 'img2',
  },
  {
    imgClassName: 'img3',
  },
  {
    imgClassName: 'img4',
  },
  {
    imgClassName: 'img5',
  },
  {
    imgClassName: 'img6',
  },
]

function App() {
  useEffect(() => {
    const imgListEl = Array.from(document.querySelectorAll('.imgBox'))
    if (!imgListEl) return
    imgListEl[0].style.width = '30%'
  }, [])

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale3d(1.1, 1.1, 1)'
    const imgBoxEl = e.target.closest('.imgBox')
    const imgListEl = Array.from(document.querySelectorAll('.imgBox'))
    if (!imgBoxEl) return

    const filterListEl = imgListEl.filter((el) => el !== imgBoxEl)
    imgBoxEl.style.width = '30%'
    filterListEl.forEach((el) => (el.style.width = '12%'))
  }

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'none'
  }

  return (
    <div className='container'>
      <h1 className='title'>Chiêm ngưỡng các cổ vật</h1>
      <h2 className='desc'>Khám phá nhiều hơn những cổ vật Chăm Pa tuyệt đẹp</h2>

      <div className='transition'>
        {imgList.map(({ imgClassName }) => (
          <div
            key={imgClassName}
            className='imgBox'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={`img ${imgClassName}`}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
