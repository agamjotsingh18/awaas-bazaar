import React from "react"
import {
  Box,
  Image,
  Text
} from "@chakra-ui/react"
import logoab from './images/image__19_-removebg-preview.png'

export default function Logo(props) {
  return ( < Box {
      ...props
    } > < Image src = {
      logoab
    }
    filter="brightness(1) invert(1)"
    /> </Box > );
}