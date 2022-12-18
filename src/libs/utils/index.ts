export const generateOnChangeEvent = (name: string, value: string | any[]) => {
  const event = {
    target: {
      name: name,
      value: value,
    },
  }
  return event
}
