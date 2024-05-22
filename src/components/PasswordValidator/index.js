import {useState} from 'react'
import {Heading} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(
    'Your password must be at least 8 characters',
  )

  const onChangePassword = event => {
    setPassword(event.target.value)

    if (event.target.value.length < 8) {
      setError(error)
    } else {
      setError('')
    }
  }
  return (
    <div>
      <Heading>Password Validator</Heading>
      <p>Check how strong and secure is your password</p>
      <input type="password" onChange={onChangePassword} value={password} />
      <p>{error}</p>
    </div>
  )
}

export default PasswordValidator
