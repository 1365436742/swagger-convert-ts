import React from 'react'
import MonacoEditor, { EditorProps } from '@monaco-editor/react'
import './index.less'
interface FormItemMoncaoEditorProps {
  value?: string
  onChange?: (content?: string) => void
  editorProps?: EditorProps
  options?: Record<string, any>
  onSave?: (content: string) => void
}
const FormItemMoncaoEditor: React.FC<FormItemMoncaoEditorProps> = props => {
  const { value, onChange, onSave, editorProps = {} } = props
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
          ...props.options,
        }}
        {...editorProps}
        defaultValue={value}
        onChange={onChange}
        onMount={(editor, monaco) => {
          // 添加键盘事件监听器
          editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            const _value = editor.getValue()
            onChange?.(_value)
            onSave?.(_value)
          })
        }}
      />
    </div>
  )
}

export default FormItemMoncaoEditor
