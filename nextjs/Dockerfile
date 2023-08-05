FROM node:18 AS deps

WORKDIR /app

RUN npm i -g pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm i

FROM deps AS builder

RUN pnpm build

FROM gcr.io/distroless/nodejs18-debian11:nonroot AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT ["node", "server.js"]