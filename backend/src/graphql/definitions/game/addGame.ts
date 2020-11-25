import { arg, floatArg, mutationField, stringArg } from '@nexus/schema'
import { nanoid } from 'nanoid'
import { DeviceEnum } from './index'

export const addGame = mutationField('addGame', {
  type: 'Boolean',
  args: {
    name: stringArg({ required: true }),
    description: stringArg({ required: true }),
    price: floatArg({ required: true }),
    platform: 'Platform',
    device: arg({ type: DeviceEnum, required: true })
  },
  async resolve(_, args, { prisma }) {
    try {
      await prisma.games.create({
        data: { id: nanoid(), ...args, poster: 'null' }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
