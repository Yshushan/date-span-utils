import { padTimeStr } from './utils'

function theDateOfSpan(span: number): string {
  const now = new Date()
  const theDate = new Date(now.setDate(now.getDate() + span))
  const year = theDate.getFullYear()
  const month = theDate.getMonth()+1
  const date = theDate.getDate()
  return `${year}-${padTimeStr(month)}-${padTimeStr(date)}`
}

function theMonthOfSpan(span: number): string {
  const now = new Date()
  const theDate = new Date(now.setMonth(now.getMonth() + span))
  const year = theDate.getFullYear()
  const month = theDate.getMonth() + 1
  return `${year}-${padTimeStr(month)}`
}

function theHourOfSpan(span: number): string {
  const now = new Date()
  const theDate = new Date(now.setHours(now.getHours() + span))
  const year = theDate.getFullYear()
  const month = theDate.getMonth() + 1
  const date = theDate.getDate()
  const hours = theDate.getHours()
  const minute = theDate.getMinutes()
  return `${year}-${padTimeStr(month)}-${padTimeStr(date)} ${padTimeStr(
    hours
  )}:${padTimeStr(minute)}`
}

type ITimeType = 'month' | 'date' | 'hour'

export function theTimeOfSpanBy(type: ITimeType, span: number): string {
  if (type === 'date') {
    return theDateOfSpan(span)
  } else if (type === 'month') {
    return theMonthOfSpan(span)
  } else {
    return theHourOfSpan(span)
  }
}
