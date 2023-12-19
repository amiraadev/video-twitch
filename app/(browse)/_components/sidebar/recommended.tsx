"use client"
import { useSidebar } from '@/store/use-sidebar'
import { User } from '@prisma/client'
import React from 'react'
import { UserItem } from './userItem'

interface RecommendedProps {
    data:User[]
}
export const Recommended = ({data}:RecommendedProps) => {
    const {collapsed} = useSidebar((state) => state)
    const showLabel = !collapsed && data.length > 0
  return (
    <div>
        {showLabel && (
            <div className="pl-6 mb-4">
                <p className='text-sm text-muted-foreground'></p>
            </div>
        )}

        <ul className='space-y-2 px-2'>
            {data.map((user) =>(
                <UserItem  
                   key={user.id}
                   username={user.username}
                   imageUrl={user.imageUrl}
                   isLive={true}
                   />
                   
            ))}
        </ul>
    </div>
  )
}
