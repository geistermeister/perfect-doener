import { css } from '@emotion/css'

export const content = css`
  height: 100%;
  width: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #6b626e white;
  h1 {
    font-size: clamp(1.75rem, 4vw, 5rem);
  }
  h3 {
    font-size: clamp(1rem, 2vw, 3rem);
  }
`

export const chapter1 = css`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #302b63 0%, #0f0c29 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f1f7df;
  p {
    font-size: clamp(0.75rem, 1vw, 1rem);
  }
  img {
    width: clamp(200px, 100% , 700px)
  }
  h1 {
    margin-bottom: 8px;
    margin-top: -20px;
  }
  h3 {
    margin-bottom: 12px;
  }
`

export const chapter2 = css`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #e6a04c 0%, #2b1903 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  text-align: center;
  h1 {
    margin-bottom: 3rem;
  }
`

export const chapter3 = css`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #b5b13e 0%, #1f1e03 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  text-align: center;
  h1 {
    margin-bottom: 3rem;
  }
`

export const chapter4 = css`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #c95d4d 0%, #330b06 100%);
`

export const chapter5 = css`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #53a842 0%, #092403 100%);
`

export const sectionDisplay = css`
  position: absolute;
  height: 100%;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  img {
    height: 1.5rem;
    width:  1.5rem;
  }
  img, span {
    margin-bottom: 8px;
  }
`

export const point = css`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  background: white;
`