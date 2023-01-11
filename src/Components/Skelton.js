import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const Skelton = ({ sdata }) => {
    return (
        <>
            {
                sdata.map((e, k) => {
                    return (
                        <>
                            <Stack spacing={1} style={{ width: '22rem' }} className='mb-4'>
                                <Skeleton variant="rectangular" animation='wave' width={'21rem'} height={200} className='row' />
                                <div className='d-flex justify-content-between' >
                                    <Skeleton variant='text' animation='wave' width={'12rem'}></Skeleton>
                                    <Skeleton variant='text' width={'5rem'} />
                                </div>
                                <div className='d-flex justify-content-between' >
                                    <Skeleton variant='text' animation='wave' width={'12rem'}></Skeleton>
                                    <Skeleton variant='text' width={'5rem'} />
                                </div>
                                <div className='d-flex justify-content-between align-content-center' >
                                    <Skeleton variant='circular' animation='wave' width={20} height={20}></Skeleton>
                                    <Skeleton variant='text' width={'18rem'} />
                                </div>
                            </Stack>
                        </>
                    )
                })
            }

        </>
    )
}

export default Skelton