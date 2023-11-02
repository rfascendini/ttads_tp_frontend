interface IUsuario {

  id?: number
  token?: string
  nombre?: string
  apellido?: string
  userName?: string
  password?: string
  rol?: string
  add_user?: number
  add_date?: Date
  edit_user?: number
  edit_date?: Date
  kill_user?: number
  kill_date?: Date
  eliminado?: number


}

export { IUsuario }