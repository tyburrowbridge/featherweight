import React from 'react'

interface UserInitialsProps {
  fullName: string
}
const firstName = (x: string) => x.split(' ').toString()
const lastName = (x: string) =>
  x
    .split(' ')
    .reverse()
    .toString()
const getInitial = (x: string) => x.charAt(0).toUpperCase()
const arrow: string = '-> '

export const UserInitials: React.SFC<UserInitialsProps> = props => {
  const fullName = props.fullName
  const fname = firstName(fullName)
  const lname = lastName(fullName)
  const firstNameInitial = getInitial(fname)
  const lastNameInitial = getInitial(lname)

  return <div>{firstNameInitial + lastNameInitial}</div>
}

export default UserInitials

UserInitials.defaultProps = {
  fullName: 'Ghost User'
}

// return <div>{arrow + firstNameInitial + lastNameInitial}</div> // add a fira arrow to initials
