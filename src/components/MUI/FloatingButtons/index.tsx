import { Fab } from "@mui/material"

function FloatingButtons({children,sx,...rest}:{children: React.ReactNode,sx?:any}) {
  return (
    <Fab color={'primary'} sx={sx} {...rest}>
  {children}
</Fab>
  )
}

export default FloatingButtons