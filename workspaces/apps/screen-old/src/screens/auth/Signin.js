import { signIn, useSession } from 'next-auth/react'
import useForm, { useRef } from 'hooks/useForm'
import { Card } from 'ui'
import { Input, Checkbox, Link, Button } from 'ui/form'
import styles from './auth.module.scss'

const SigninScreen = ({ demoUsers }) => {
  const formRef = useRef()
  const [formState, update] = useForm(formRef)

  const onSubmit = () => {
    console.log('submitting', formState)
    signIn('credentials', { ...formState, redirect: false })
  }

  return (
    <div className={styles.authLayout}>
      <Card title="Sign in to your account">
        <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
          <Input
            className="mb-5 block"
            type="email"
            name="email"
            label="Your email"
            placeholder="john@mysalon.com"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="••••••••"
          />

          <div className={styles.twoColumns}>
            <Checkbox name="remember" label="Remember me" />
            <Link disabled href="/">
              Forgot password?
            </Link>
          </div>
          <Button>Sign in</Button>
          <p>
            <span>Don&apos;t have an account yet?&nbsp;</span>
            <Link href="/">Sign up</Link>
          </p>
        </form>
        {demoUsers && (
          <select
            onChange={(ev) => {
              update((s) => ({
                ...s,
                email: ev.target.value,
                password: 'MySalon',
              }))
            }}
          >
            <option value="0">sign in as...</option>
            {demoUsers.map((user) => (
              <option key={user.email} value={user.email}>
                {`${user.firstName} - ${user.lastName}`}
              </option>
            ))}
          </select>
        )}
      </Card>
    </div>
  )
}

export default SigninScreen
