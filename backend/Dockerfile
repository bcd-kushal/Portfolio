FROM node:20-alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY dist/server.js ./

ENV PORT=3003

ENV SERVER_NAME="My Server"

ENV EMAILJS_SERVICE_ID="service_63tiplt"

ENV EMAILJS_TEMPLATE_ID="template_bam5qq1"

ENV EMAILJS_USER_ID="wkmfUMz9-C66M-Ga0"

ENV EMAILJS_MY_NAME="Kushal"

ENV API="https://api.emailjs.com/api/v1.0/email/send-form"

ENV SUPABASE_URL="https://qovmawtwaoigkiczknzc.supabase.co"

ENV SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvdm1hd3R3YW9pZ2tpY3prbnpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzI4MjUyNywiZXhwIjoyMDIyODU4NTI3fQ.46rRanMUla04jXfMyJ1WFvOMCl4XsmYNvw0ypk_CDGk"

EXPOSE 3003

CMD [ "npm", "start" ]