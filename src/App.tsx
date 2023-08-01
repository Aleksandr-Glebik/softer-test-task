import React, { useState, useRef } from 'react'
import './App.css'
import clsx from 'clsx'

const ClientID = process.env.REACT_APP_Client_ID
const ClientSecret = process.env.REACT_APP_Client_Secret
const RedirectURI = process.env.REACT_APP_Redirect_URI

const App: React.FC = () => {
  const [fileList, setFileList] = useState<FileList | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files)
  };

  const handleUploadClick = async () => {
    if (!fileList) {
      return
    }

    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(`file-${i}`, file, file.name)
    })

    console.log('data', formData)
    console.log('files', files)

    // try {
    //   const url = ''
    //   const res = await fetch(url, {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   const data = await res.json()
    //   console.log(data)
    // } catch (error) {
    //   console.error(error)
    // }

  }

  const files = fileList ? [...fileList] : []

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Загрузка файлов на Yandex.disk</h1>

        <form className="form">
          <label className={clsx('input__label', 'file')}>
            Выберите файл
            <input
              className="input"
              type="file"
              ref={fileRef}
              onChange={handleFileChange}
              multiple
            />
          </label>
        </form>

        {
          files.length > 0 &&
            <ul className="list">
              {files.map((file, index) => (
                <li
                key={`${file.name}_${index}`}
                className="item"
                >
                  {file.name}
                </li>
              ))}
              <li className="item__length">{files.length}</li>
            </ul>
        }

        <button
          onClick={handleUploadClick}
          className="btn"
        >
          Отправить
        </button>
      </div>
    </div>
  )
}

export default App
