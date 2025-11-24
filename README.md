```mermaid
erDiagram
    ADMINS {
        UUID id PK
        string name
        string email
        string password
        enum role
        string invoice_express_account_name
        string invoice_express_api_key
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    PROVIDERS {
        UUID id PK
        string name
        string email
        timestamp email_verified_at
        string password
        string company_name
        string nif
        string address
        string phone
        string invoice_express_account_name
        string invoice_express_api_key
        UUID tax_id FK
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    CUSTOMERS {
        UUID id PK
        string name
        string email
        timestamp email_verified_at
        string password
        string phone
        string nif
        string address
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }
    TIERS {
        UUID id PK
        string description
        string details
        int max_payments_per_month
        decimal max_total_amount_per_month
        decimal monthly_price
        decimal yearly_price
        int order
        enum type
        enum status
        timestamp created_at
        timestamp updated_at
    }
    PROVIDER_TIERS {
        UUID id PK
        UUID provider_id FK
        UUID tier_id FK
        date start_date
        date end_date
        enum status
        timestamp created_at
        timestamp updated_at
    }
    ARTICLES {
        UUID id PK
        string name
        text description
        enum type
        decimal price
        UUID tax_id FK
        timestamp created_at
        timestamp updated_at
    }
    ORDERS {
        UUID id PK
        UUID provider_id FK
        UUID customer_id FK
        decimal subtotal_price
        decimal total_price
        enum status
        timestamp created_at
        timestamp updated_at
    }
    ORDER_ITEMS {
        UUID id PK
        UUID order_id FK
        UUID article_id FK
        int quantity
        decimal unit_price
        decimal discount
        UUID tax_id FK
        decimal total_price
        timestamp created_at
        timestamp updated_at
    }
    TAXES {
        UUID id PK
        string description
        string invoice_express_code
        decimal value
        string exemption_reason
        string label_text
        timestamp created_at
        timestamp updated_at
    }
    RECEIPTS {
        UUID id PK
        UUID order_id FK
        bigint invoice_express_id
        string permalink
        date date
        date due_date
        decimal amount
        text pdf_url
        string file_name
        json invoice_details
        timestamp created_at
        timestamp updated_at
    }
    PAYMENTS {
        UUID id PK
        UUID order_id FK
        enum payment_method
        decimal amount
        enum status
        string transaction_id
        json response_data
        timestamp created_at
        timestamp updated_at
    }
    REFUNDS {
        UUID id PK
        UUID order_id FK
        decimal amount
        enum status
        timestamp created_at
        timestamp updated_at
    }
    REFUND_ORDER_ITEMS {
        UUID id PK
        UUID refund_id FK
        UUID order_item_id FK
        timestamp created_at
        timestamp updated_at
    }

    ADMINS ||--o{ PROVIDER_TIERS : manages
    PROVIDERS ||--o{ PROVIDER_TIERS : subscribes
    PROVIDERS ||--o{ ORDERS : places
    CUSTOMERS ||--o{ ORDERS : places
    TIERS ||--o{ PROVIDER_TIERS : includes
    ORDERS ||--o{ ORDER_ITEMS : contains
    ARTICLES ||--o{ ORDER_ITEMS : defines
    TAXES ||--o{ ARTICLES : applies
    TAXES ||--o{ ORDER_ITEMS : applies
    ORDERS ||--o{ RECEIPTS : issues
    ORDERS ||--o{ PAYMENTS : receives
    ORDERS ||--o{ REFUNDS : processes
    REFUNDS ||--o{ REFUND_ORDER_ITEMS : details
