# API Client

This directory contains the Hono RPC client for type-safe communication with the backend.

## Overview

We use Hono's RPC client feature to achieve full type safety between frontend and backend. This means:

- Auto-completion for API endpoints
- Type checking for request/response data
- No manual type definitions needed for API calls

## Usage

```typescript
import { client } from '@/lib/api-client'

// Fetch weather data
const response = await client.api.weather.$get()
const weatherData = await response.json()

// Check health
const healthResponse = await client.health.$get()
const health = await healthResponse.json()
```

## Benefits

1. **Type Safety**: The client automatically inherits types from the backend routes
2. **No Duplication**: API types are defined once in the backend and shared
3. **Better DX**: Auto-completion and type checking in your IDE
4. **Refactoring**: Changes to API structure are immediately reflected in the client

## How It Works

1. Backend exports its route type (`AppType`)
2. Frontend imports this type and creates a typed client
3. The client provides typed methods for each endpoint
