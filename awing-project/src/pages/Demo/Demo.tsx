import { yupResolver } from '@hookform/resolvers/yup'
import { AppBar, Box, Container, Card, Tab, Tabs, Toolbar, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
  campaignName: yup.string().required('Name is required'),
  description: yup.string().email('Invalid email format'),
})
export type Schema = yup.InferType<typeof schema>

export default function Demo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: yupResolver(schema),
  })
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue)
    console.log(event)
  }

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log(data)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">AWING TEST</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ marginTop: '20px' }}>
        <Card sx={{ typography: 'body1' }}>
          <Tabs value={value} onChange={handleChange} sx={{ padding: '16px' }}>
            <Tab label="Thông tin" value={0} />
            <Tab label="Chiến dịch con" value={1} />
          </Tabs>
          {value === 0 && (
            <Box sx={{ padding: '16px' }}>
              <form onSubmit={handleSubmit(onSubmit)} className="block">
                <Controller
                  name="campaignName"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <TextField
                        sx={{ width: '100%' }}
                        {...field}
                        error={errors.campaignName?.message ? true : false}
                        helperText={errors.campaignName?.message}
                        id="standard-basic"
                        label="Tên chiến dịch"
                        variant="standard"
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <TextField
                        sx={{ width: '100%' }}
                        {...field}
                        id="standard-basic"
                        label="Mô tả"
                        variant="standard"
                      />
                    </Box>
                  )}
                />
              </form>
            </Box>
          )}
          {value === 1 && (
            <Box sx={{ padding: '16px' }}>
              <Button
                sx={{ marginTop: '12px', borderRadius: '50%', width: '60px', height: '60px' }}
                type="submit"
                variant="outlined"
              >
                <Typography variant="h5">+</Typography>
              </Button>
            </Box>
          )}
        </Card>
      </Container>
    </>
  )
}
