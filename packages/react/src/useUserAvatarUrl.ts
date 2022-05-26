import jwt_decode from 'jwt-decode'
import { useMemo } from 'react'

import { useInterpret, useSelector } from '@xstate/react'
import { useAccessToken } from './useAccessToken'
import { useAuthInterpreter } from './useAuthInterpreter'
import { useNhostClient } from './useNhostClient'

/**
 * Use the hook `useUserAvatarUrl` to get the avatar URL of the user.
 *
 * @example
 * ```tsx
 * const userAvatarUrl = useUserAvatarUrl();
 * ```
 *
 * @docs https://docs.nhost.io/reference/react/use-user-avatar-url
 */
export const useUserAvatarUrl = () => {
  const service = useAuthInterpreter()
  return useSelector(
    service,
    (state) => state.context.user?.avatarUrl,
    (a, b) => a === b
  )
}

/**
 * @internal
 * @deprecated use {@link useUserAvatarUrl} instead */
export const useAvatarUrl = useUserAvatarUrl
