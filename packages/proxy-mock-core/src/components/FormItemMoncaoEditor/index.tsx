import React from 'react'
import MonacoEditor, { EditorProps } from '@monaco-editor/react'
import './index.less'
interface FormItemMoncaoEditorProps {
  value?: string
  onChange?: (content?: string) => void
  editorProps?: EditorProps
}
const FormItemMoncaoEditor: React.FC<FormItemMoncaoEditorProps> = props => {
  const { value, onChange, editorProps = {} } = props
  return (
    <div className="custom-monaco-editor">
      <MonacoEditor
        height="calc(100vh - 315px)"
        className="custom-monaco-editor"
        defaultLanguage="javascript"
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: 'line',
          automaticLayout: true,
        }}
        {...editorProps}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormItemMoncaoEditor
