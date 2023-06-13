import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import useForm, { useRef } from 'hooks/useForm'
import useAuth from 'hooks/useAuth'
import Card from 'ui/Card'
import { Input, Checkbox, Link, Button } from 'ui/form'
import RoleButton from './RoleButton'
import styles from './auth.module.scss'
import { Select, SelectContent, SelectGroup, SelectItem } from 'shad/select'
import { SelectLabel, SelectTrigger, SelectValue } from 'shad/select'

const SignupScreen = () => {
  const { register } = useAuth()
  const formRef = useRef()
  const [formState, update] = useForm(formRef, {
    email: 'john.woo@gmail.com',
    password: 'MySalon',
    password2: 'MySalon',
    origin: window.location.origin,
    role: 'customer',
  })

  const { role } = formState

  const onSubmit = async () => {
    // validation and then
    const result = await register(formState)
    console.log('SUCCESS!!!!', result)
  }

  return (
    <div>
      <Card title="Create a new account">
        <form onSubmit={onSubmit} ref={formRef}>
          <div className="flex justify-around w-full mb-3">
            <RoleButton
              onClick={() => update(s => ({ ...s, role: 'customer' }))}
              label="Customer"
              active={role === 'customer'}
            />
            <RoleButton
              onClick={() => update(s => ({ ...s, role: 'owner' }))}
              label="Owner"
              active={role === 'owner'}
            />
          </div>
          <div className="grid mb-3 grid-cols-2 gap-3  lg:gap-5">
            <Input type="text" name="firstName" label="First Name" placeholder="John" required />
            <Input type="text" name="lastName" label="Last Name" placeholder="Wayne" required />
          </div>
          <div className="flex flex-col gap-3">
            <Input
              className="mb-5 block"
              type="email"
              name="email"
              label="Your email"
              placeholder="john@mysalon.com"
              required
            />
            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              <GenderSelect />
              <Input
                className="mb-5 block col-span-2"
                type="phone"
                name="phone"
                label="Your Phone #"
                placeholder="123 - 456 7890"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="••••••••"
                required
              />

              <Input
                type="password"
                name="password2"
                label="Confirm Password"
                placeholder="••••••••"
              />
            </div>
            <div className="mt-5">
              <Button>Register</Button>
              <p>
                <span>already have an account yet?&nbsp;</span>
                <Link href="/auth/signin">Sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default SignupScreen

const GenderSelect = () => {
  return (
    <div className="col-span-1">
      <label className="block font-semibold mb-1">&nbsp;</label>
      <Select name="gender">
        <SelectTrigger>
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>Fruits</SelectLabel> */}
            <SelectItem value="M">Male</SelectItem>
            <SelectItem value="F">Female</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
