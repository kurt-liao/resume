import type { Component } from '../types'

export default function transferComponent(component: Partial<Component>) {
  Object.defineProperty(component, `${component._name?.toLowerCase()}_template`,
    Object.getOwnPropertyDescriptor(component, 'template')!)
  delete component.template

  return component
}
