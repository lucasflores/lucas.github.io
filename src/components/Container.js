import React, { useContext } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'
import { InstagramPosts } from './InstagramPosts'

export const Container = ({ title, text, nodes }) => {
  const size = useContext(ResponsiveContext)
  const extraProps =
    size !== `small` ? { style: { gridColumnStart: 2 } } : undefined
  return (
    <Box {...extraProps}>
      <InstagramPosts nodes={nodes} />
    </Box>
  )
}
