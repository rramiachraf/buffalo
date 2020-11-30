import { enumType, objectType } from '@nexus/schema'

export const PlatformEnum = enumType({
  name: 'Platform',
  members: {
    steam: 'steam',
    origin: 'origin',
    blizzard: 'blizzard',
    uplay: 'uplay'
  }
})

export const DeviceEnum = enumType({
  name: 'Device',
  members: {
    pc: 'pc',
    xbox: 'xbox',
    playstation: 'playstation'
  }
})

export const Game = objectType({
  name: 'Game',
  definition(t) {
    t.id('id', { nullable: false })
    t.string('name', { nullable: false })
    t.string('description', { nullable: false })
    t.float('price', { nullable: false })
    t.string('poster')
    t.field('platform', {
      type: PlatformEnum,
      nullable: true
    })
    t.field('device', {
      type: DeviceEnum,
      nullable: false
    })
  }
})

export const GameOfTheDay = objectType({
  name: 'GameOfTheDay',
  definition(t){
    t.id('id')
    t.string('name')
    t.float('price')
    t.string('largePoster')
  }
})

export { addGame } from './addGame'
export { game } from './game'
export { games } from './games'
export { searchGame } from './searchGame'
export { makeGameOfTheDay } from './makeGameOfTheDay'
export { gameOfTheDay } from './gameOfTheDay'
