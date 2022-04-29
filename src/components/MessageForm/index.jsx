import React, { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

export default function MessageForm(props) {
  const [value, setValue] = useState('')
  const { chatID, creds } = props
  const handleSubmit = (e) => {
    e.preventDefault()//一般js裡要取消默認表單送出而開啟新頁會寫<form ... return false">
    //但在React中要寫 event.preventDefault
    const text = value.trim()//拿掉字串前後的空白
    if (text.length > 0) sendMessage( creds, chatID, { text })
    setValue('')
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    isTyping(props, chatID)
  }

  const handleUpload = (e) => {
    sendMessage(creds, chatID, { files: e.target.files, text: '' })//若是圖或檔案要用.files 一般則用e.target.value
  }

  return (
    <div>
      <form className='message-form' onSubmit={handleSubmit}>
        <input
          className='message-input'
          placeholder='Send a message...'
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
          <span className='image-button'>
            <PictureOutlined className='picture-icon' />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{display:'none'}}
          onChange={handleUpload}
        />
        <button type='submit' className='send-button'>
           <SendOutlined className='send-icon' />
        </button>
      </form>
    </div>
  )
}
