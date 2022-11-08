export default function transferComponent(component: any) {
  Object.defineProperty(component, 'header_template',
    Object.getOwnPropertyDescriptor(component, 'template'))
  delete component.template

  return component
}
