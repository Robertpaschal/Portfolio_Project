"""Add created_at column to Document model

Revision ID: 834f5ce10992
Revises: None
Create Date: 2024-08-15 10:00:00.000000
"""

from alembic import op
import sqlalchemy as sa
from datetime import datetime as dt

# revision identifiers, used by Alembic
revision = '834f5ce10992'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # Add the created_at column
    op.add_column('documents', sa.Column('created_at', sa.DateTime(), server_default=dt.now(), nullable=True))

