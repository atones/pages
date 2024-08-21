import type { RequestEvent } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'

export const load = ({ url }: RequestEvent) => {
  const foo = url.searchParams.get('foo') || 'default value'

  const accountId = url.searchParams.get('account_id')
  const tables = parseInt(url.searchParams.get('tables') ?? '0', 10)

  if (!accountId || isNaN(tables)) {
    throw error(400, 'Missing or invalid parameters: account_id, tables')
  }

  return {
    foo,
    accountId,
    tables
  }
}