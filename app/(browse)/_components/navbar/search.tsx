"use client";

import React from 'react'
import qs from 'query-string'
import {Search as SearchIcon ,X} from "lucide-react"
import {useRouter} from "next/navigation"


import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';



export const Search = () => {
  return (
    <form className='relative w-full lg:w-[400px] flex items-center'>
        <Input
          placeholder='Search'
          />
        <Button
        type='submit'
        size='sm'
        variant='secondary'
        className='rounded-l-none'
        >
            <SearchIcon className='h-5 w-5 text-muted-foreground'/>
        </Button>
    </form>
  )
}
