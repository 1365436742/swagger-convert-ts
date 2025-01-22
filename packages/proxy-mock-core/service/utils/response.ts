export const successRes = <T>(data: T, message?: string) => {
  return {
    data,
    message,
    status: 1,
  }
}

export const errorRes = <T>(data: T, message?: string) => {
  return {
    data,
    message,
    status: 0,
  }
}
