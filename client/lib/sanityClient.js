import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5o8sz590',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sky1V4IfZ0UkMKD0BUmKK9N8TtdV5hWVWiTVoCKqlNc0zONFbBApND10BiTl6yeE6a3FM0YAs9OnVMhBjBSybPMaCPQhYU1KHYTNLeQLMln9G7DhWM3SWno5LOtJ7RHDWfl1kLS8VHEQRTIiLE51xPkFLo8xEdPcp3nt8I2Nq6VH4BvbaZK5',
  useCdn: false,
})