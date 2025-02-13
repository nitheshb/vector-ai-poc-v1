import { ConnectionProviderProps } from '@/providers/connections-provider'
import { z } from 'zod'

export const EditUserProfileSchema = z.object({
  email: z.string().email('Required'),
  name: z.string().min(1, 'Required'),
})

export const WorkflowFormSchema = z.object({
  name: z.string().min(1, 'Required'),
  description: z.string().min(1, 'Required'),
})

export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord' | 'Telegram' | 'Jira'

export type Connection = {
  title: ConnectionTypes
  description: string
  image: string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}

export type EditorCanvasTypes =
  | 'Email'
  | 'Condition'
  | 'Open AI'
  | 'Slack'
  | 'Google Drive'
  | 'Notion'
  | 'Custom Webhook'
  | 'Google Calendar'
  | 'Trigger'
  | 'Action'
  | 'Wait'
  | 'Discord'
  | 'Telegram Connection'
  | 'Get Recent Message'
  | 'Send Message'
  | 'Jira Connection'
  | 'Get Many Jira Issues'
  | 'Get Jira Issue'
  | 'Create Jira Issue'
  | 'Delete Jira Issue'
  | 'Update Jira Issue'

export type EditorCanvasStatus = 'idle' | 'loading' | 'success' | 'failure';

export type EditorCanvasCardType = {
  title: string
  description: string
  completed: boolean
  current: boolean
  metadata: any
  type: EditorCanvasTypes
  status: EditorCanvasStatus;
}

export type EditorNodeType = {
  id: string
  type: EditorCanvasCardType['type']
  myFunction: () => void
  position: {
    x: number
    y: number
  }
  data: EditorCanvasCardType
}

export type EditorNode = EditorNodeType

export type EditorActions =
  | {
    type: 'LOAD_DATA'
    payload: {
      elements: EditorNode[]
      edges: {
        id: string
        source: string
        target: string
      }[]
    }
  }
  | {
    type: 'UPDATE_NODE'
    payload: {
      elements: EditorNode[]
    }
  }
  | { type: 'REDO' }
  | { type: 'UNDO' }
  | {
    type: 'SELECTED_ELEMENT'
    payload: {
      element: EditorNode
    }
  }

export const nodeMapper: Record<string, string> = {
  Notion: 'notionNode',
  Slack: 'slackNode',
  Discord: 'discordNode',
  Telegram: 'telegramNode',
  'Google Drive': 'googleNode',
}
