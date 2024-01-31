#!/usr/bin/env python3
"""MRU cache module"""


from collections import OrderedDict
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """MRU caching class"""
    def __init__(self):
        """initialises fifo cache instance"""
        super().__init__()
        self.order = OrderedDict()

    def put(self, key, item):
        """Assigns item value to key in cache_data dictionary"""
        if key is not None and item is not None:
            if key in self.cache_data:
                del self.order[key]
            self.order[key] = None
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                mru = list(self.order.keys())[-1]
                print(f"DISCARD: {mru}")
                del self.cache_data[mru]
                del self.order[mru]
            self.cache_data[key] = item

    def get(self, key):
        """Returns value in dict linked to key"""
        if key is not None and key in self.cache_data:
            del self.order[key]
            self.order[key] = None
            return self.cache_data[key]
        return None
