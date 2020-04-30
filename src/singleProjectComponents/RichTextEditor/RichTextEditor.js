import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'

import { Button, Icon, Toolbar } from './components'
import './RichTextEditor.css';

import {css} from 'emotion'

import DocumentMenuBar from './documentMenuBar/documentMenuBar'



const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}


const LIST_TYPES = ['numbered-list', 'bulleted-list']

const RichTextEditor = () => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const editorChange = (value) => {
    console.log(JSON.stringify(value));
    setValue(value);
  }


  const textToSpeech = (text) => {
    const ngrok_url = ""
    let formData = new FormData();
    formData.append("tts",text)
    const request = new Request(
        ngrok_url + '/tts/', 
        { 
            method: 'POST',
            body: formData
        }
    );

    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Could not get to Response Server');
            }
        })
        .then((data) => {
            const audioURL = ngrok_url + '/' + data["audio_uri"]
            const videoURL = ngrok_url + '/' + data["video_uri"]
            const audio = new Audio(audioURL);
            audio.play();
        });
  }
  
  return (
    <div 
      className={
        css`
          flex-direction: column;
          align-items: flex-start;
          display: flex;
          width: 80%;
          text-align: justify;
          background: #F5F5F5;
          color: #383838;
          font-family: 'Gill Sans';
        `
      }
      id = "left">
      <Slate editor={editor} value={value} onChange={editorChange}>
        <div
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            width: '95%'
          }}
        >
        <DocumentMenuBar title={"Corona Virus"}/>
          <Toolbar>
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
            <MarkButton format="code" icon="code" />
            <BlockButton format="heading-one" icon="looks_one" />
            <BlockButton format="heading-two" icon="looks_two" />
            <BlockButton format="block-quote" icon="format_quote" />
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
            <MarkButton format="happy" icon="mood" />
            <MarkButton format="sad" icon="mood_bad" />
          </Toolbar>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: '#f8f8f8',
            marginTop: '-30px'
          }}
        >
          <Editable
            className={
              css`
                height: 95%;
                width: 80%;
                padding: 20px;
                background-color: #fbfbfb;
                overflow: auto;
              `
            }
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Let's write out tonight's news"
            spellCheck
            autoFocus
            onKeyDown={event => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault()
                  const mark = HOTKEYS[hotkey]
                  toggleMark(editor, mark)
                }
              }
            }}
          />
        </div>

      </Slate>
    </div>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.happy) {
    children = <span style={{color:'#0080ff'}} >{children}</span>
  }

  if (leaf.sad) {
    children = <span style={{color:'#9370DB'}} >{children}</span>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
      { text: 'I am hungry', happy: true},
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]
export default RichTextEditor;