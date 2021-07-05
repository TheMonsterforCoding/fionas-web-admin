import { NextApiRequest, NextApiResponse } from 'next'

import { CreateUser } from "../../components/CreateUser"

export default function createUser(request: NextApiRequest, response: NextApiResponse) {

  return (
    <>
      <CreateUser />
    </>
  )
}

